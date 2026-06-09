module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    success: true,
    service: "Crypto Data Feed",
    description: "Real-time crypto token analysis and market data service",
    result: {
      status: "active",
      data: "Token analysis complete",
      timestamp: new Date().toISOString()
    }
  });
};
