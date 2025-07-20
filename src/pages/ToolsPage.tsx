import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  BarChart3,
  Activity,
  Target,
  Zap,
  Settings,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const ToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'archviz' | 'trading'>('archviz');
  const [renderSpecs, setRenderSpecs] = useState({
    resolution: '1920x1080',
    samples: 100,
    complexity: 'medium',
    renderer: 'cycles'
  });
  const [renderTime, setRenderTime] = useState<number | null>(null);

  const [tradingJournal, setTradingJournal] = useState({
    symbol: 'EURUSD',
    entryPrice: '',
    exitPrice: '',
    quantity: '',
    type: 'buy',
    status: 'open'
  });

  const [journalEntries, setJournalEntries] = useState([
    {
      id: 1,
      date: '2024-01-15',
      symbol: 'EURUSD',
      type: 'buy',
      entry: 1.0950,
      exit: 1.0980,
      quantity: 10000,
      pnl: 300,
      status: 'closed'
    },
    {
      id: 2,
      date: '2024-01-14',
      symbol: 'GBPUSD',
      type: 'sell',
      entry: 1.2650,
      exit: 1.2620,
      quantity: 5000,
      pnl: 150,
      status: 'closed'
    }
  ]);

  const calculateRenderTime = () => {
    const baseTime = 60; // base time in minutes
    const resolutionMultiplier = renderSpecs.resolution === '4096x2160' ? 4 : 
                                renderSpecs.resolution === '2560x1440' ? 2 : 1;
    const samplesMultiplier = renderSpecs.samples / 100;
    const complexityMultiplier = renderSpecs.complexity === 'high' ? 2 : 
                                renderSpecs.complexity === 'medium' ? 1.5 : 1;
    const rendererMultiplier = renderSpecs.renderer === 'cycles' ? 1.5 : 1;

    const totalTime = baseTime * resolutionMultiplier * samplesMultiplier * complexityMultiplier * rendererMultiplier;
    setRenderTime(Math.round(totalTime));
  };

  const calculatePnL = () => {
    const entry = parseFloat(tradingJournal.entryPrice);
    const exit = parseFloat(tradingJournal.exitPrice);
    const quantity = parseFloat(tradingJournal.quantity);
    
    if (entry && exit && quantity) {
      const pnl = tradingJournal.type === 'buy' ? 
        (exit - entry) * quantity : 
        (entry - exit) * quantity;
      return pnl.toFixed(2);
    }
    return '0.00';
  };

  const addJournalEntry = () => {
    const newEntry = {
      id: journalEntries.length + 1,
      date: new Date().toISOString().split('T')[0],
      symbol: tradingJournal.symbol,
      type: tradingJournal.type,
      entry: parseFloat(tradingJournal.entryPrice),
      exit: parseFloat(tradingJournal.exitPrice) || 0,
      quantity: parseFloat(tradingJournal.quantity),
      pnl: parseFloat(calculatePnL()),
      status: tradingJournal.status
    };
    setJournalEntries([...journalEntries, newEntry]);
    setTradingJournal({ ...tradingJournal, entryPrice: '', exitPrice: '', quantity: '' });
  };

  const totalPnL = journalEntries.reduce((sum, entry) => sum + entry.pnl, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Essential calculators and tools for ArchViz and Trading
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg">
            <button
              onClick={() => setActiveTab('archviz')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
                activeTab === 'archviz'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
              }`}
            >
              <Calculator className="w-5 h-5" />
              <span>Architecture Visualization</span>
            </button>
            <button
              onClick={() => setActiveTab('trading')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
                activeTab === 'trading'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Trading</span>
            </button>
          </div>
        </div>

        {/* Architecture Visualization Tools */}
        {activeTab === 'archviz' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Render Time Calculator */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Render Time Calculator
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Resolution
                  </label>
                  <select
                    value={renderSpecs.resolution}
                    onChange={(e) => setRenderSpecs({...renderSpecs, resolution: e.target.value})}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1920x1080">1920x1080 (Full HD)</option>
                    <option value="2560x1440">2560x1440 (2K)</option>
                    <option value="4096x2160">4096x2160 (4K)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Samples: {renderSpecs.samples}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="50"
                    value={renderSpecs.samples}
                    onChange={(e) => setRenderSpecs({...renderSpecs, samples: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>50</span>
                    <span>500</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Scene Complexity
                  </label>
                  <select
                    value={renderSpecs.complexity}
                    onChange={(e) => setRenderSpecs({...renderSpecs, complexity: e.target.value})}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low (Simple geometry)</option>
                    <option value="medium">Medium (Moderate detail)</option>
                    <option value="high">High (Complex scene)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Renderer
                  </label>
                  <select
                    value={renderSpecs.renderer}
                    onChange={(e) => setRenderSpecs({...renderSpecs, renderer: e.target.value})}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="eevee">Eevee (Real-time)</option>
                    <option value="cycles">Cycles (Path tracing)</option>
                  </select>
                </div>

                <button
                  onClick={calculateRenderTime}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Calculate Render Time
                </button>

                {renderTime && (
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-blue-900 dark:text-blue-100">
                        Estimated Render Time
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {renderTime} minutes
                    </div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      ({Math.round(renderTime / 60)} hours {renderTime % 60} minutes)
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Tools */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Pro Render Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Batch Processor</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Queue multiple renders</p>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mt-2 inline-block">PRO</span>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <Settings className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Cloud Render</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">AWS/Google Cloud</p>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full mt-2 inline-block">PRO</span>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <Calculator className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Material Cost</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Project budgeting</p>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full mt-2 inline-block">PRO</span>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Auto Post-Process</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">AI enhancement</p>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full mt-2 inline-block">PRO</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                    <strong>Free users:</strong> Basic render time calculator only. 
                    <button className="text-blue-600 dark:text-blue-400 underline ml-1">Upgrade for advanced tools</button>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Pro Features</h3>
                <p className="text-blue-100 mb-4">
                  Unlock advanced calculators and automation tools
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Trading Tools */}
        {activeTab === 'trading' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trading Journal */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Trading Journal
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Symbol
                    </label>
                    <input
                      type="text"
                      value={tradingJournal.symbol}
                      onChange={(e) => setTradingJournal({...tradingJournal, symbol: e.target.value})}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                      placeholder="EURUSD"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Type
                    </label>
                    <select
                      value={tradingJournal.type}
                      onChange={(e) => setTradingJournal({...tradingJournal, type: e.target.value})}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="buy">Buy</option>
                      <option value="sell">Sell</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Entry Price
                    </label>
                    <input
                      type="number"
                      step="0.0001"
                      value={tradingJournal.entryPrice}
                      onChange={(e) => setTradingJournal({...tradingJournal, entryPrice: e.target.value})}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                      placeholder="1.0950"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Exit Price
                    </label>
                    <input
                      type="number"
                      step="0.0001"
                      value={tradingJournal.exitPrice}
                      onChange={(e) => setTradingJournal({...tradingJournal, exitPrice: e.target.value})}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                      placeholder="1.0980"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={tradingJournal.quantity}
                    onChange={(e) => setTradingJournal({...tradingJournal, quantity: e.target.value})}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                    placeholder="10000"
                  />
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold text-emerald-900 dark:text-emerald-100">
                      Estimated P&L
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    ${calculatePnL()}
                  </div>
                </div>

                <button
                  onClick={addJournalEntry}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Add Entry
                </button>
              </div>
            </div>

            {/* Journal Entries & Stats */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Performance Summary
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      ${totalPnL.toFixed(2)}
                    </div>
                    <div className="text-sm text-emerald-700 dark:text-emerald-300">
                      Total P&L
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {journalEntries.length}
                    </div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      Total Trades
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Recent Trades
                </h3>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {journalEntries.slice(-5).map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {entry.symbol}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {entry.type.toUpperCase()} • {entry.date}
                        </div>
                      </div>
                      <div className={`font-bold ${entry.pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        ${entry.pnl.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Live Trading</h3>
                <p className="text-emerald-100 mb-4">
                  Connect to live markets and track real-time P&L
                </p>
                <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Connect Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsPage;