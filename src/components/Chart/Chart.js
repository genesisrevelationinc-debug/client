 const [settings, setSettings] = React.useState({})
 const [chartRef, setChartRef] = React.useRef(null)
 const [data, setData] = React.useState(null)
 const [loading, setLoading] = React.useState(false)
 const [error, setError] = React.useState(null)
 React.useEffect(() => {
   if (chartData) {
     chartRef.current = chartData
   }
 }, [chartData])
 const liquidationPrice = (price) => {
   // Calculate liquidation price
   return entryPrice * (1 - (0.1 * direction))
 }
 return (
   <div>
     <Chart ref={chartRef} />
     <div className="chart-controls">
       <button onClick={toggleSettings}>
         Toggle Liquidation Price
       </button>
       <div style={styles.liquidationPrice}>
         {liquidationPrice}
       </div>
     </div>
   </div>
 )