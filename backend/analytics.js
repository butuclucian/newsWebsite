const { BetaAnalyticsDataClient } = require('@google-analytics/data');
require('dotenv').config();

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: './service-account-key.json', // salvezi cheia aici
});

const getTopPages = async () => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${process.env.GA4_PROPERTY_ID}`,
    dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 5,
  });

  return response.rows.map(row => ({
    path: row.dimensionValues[0].value,
    views: row.metricValues[0].value,
  }));
};

module.exports = { getTopPages };
