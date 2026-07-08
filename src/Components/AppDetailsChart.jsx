
import { Bar, ComposedChart, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetailsChart = ({ singleApp }) => {
    const ratings =  singleApp.ratings;
    const reversRatings = [...ratings].reverse();
    

  return (
    <div>
      <h2 className="font-semibold text-2xl text-[#001931] mb-5">Ratings</h2>
      <ComposedChart
        layout="vertical"
        style={{
          width: "100%",
          maxHeight: "320px",
          aspectRatio: 1 / 1.618,
        }}
        responsive
        data={reversRatings}
      >
        <XAxis type="count" axisLine={false} tickLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          tickMargin={20}
          width="auto"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Bar dataKey="count" barSize={30} fill="#FF8811" />
      </ComposedChart>
    </div>
  );
};

export default AppDetailsChart;