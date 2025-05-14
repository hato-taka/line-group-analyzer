import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#F2482C', '#FFFFFF'];
const USER_COLORS = ['#8C8C8C', '#A27358', '#92BFB1', '#C24360', '#F4AC45', '#694A38'];

type UserData = {
  name: string;
  stampRate: number;
};

const data: UserData[] = [
  { name: 'たかし', stampRate: 0.80 },
  { name: 'ゆうこ', stampRate: 0.65 },
  { name: 'けんじ', stampRate: 0.50 },
  { name: 'あいこ', stampRate: 0.95 },
  { name: 'しんじ', stampRate: 0.70 },
  { name: 'まき', stampRate: 0.60 },
];

const StampDonutChart = () => {
  return (
    <div className="grid grid-cols-3 gap-6 bg-green-900 p-6 rounded-xl w-full max-w-md mx-auto text-white">
      {data.map((user, index) => (
        <div key={user.name} className="flex flex-col items-center relative">
          <div className="relative w-20 h-20">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'stamp', value: user.stampRate },
                    { name: 'other', value: 1 - user.stampRate },
                  ]}
                  innerRadius={20}
                  outerRadius={35}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {COLORS.map((color, i) => (
                    <Cell key={`cell-${i}`} fill={color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 text-xs text-white font-semibold transform -translate-x-1/2 -translate-y-1/2">
              {(user.stampRate * 100).toFixed(0)}%
            </div>
          </div>
          <div
            className="w-5 h-5 rounded-full mt-2"
            style={{ backgroundColor: USER_COLORS[index % USER_COLORS.length] }}
          />
          <div className="mt-1 text-sm">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default StampDonutChart;