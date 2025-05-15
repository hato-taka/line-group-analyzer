import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#F2482C', '#FFFFFF'];
const USER_COLORS = ['#8C8C8C', '#A27358', '#92BFB1', '#C24360', '#F4AC45'];

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
];

const StampDonutChart = () => {
  const top = data.slice(0, 2);
  const bottom = data.slice(2, 5);

  const renderUser = (user: UserData, index: number) => (
    <div key={user.name} className="flex flex-col items-center relative">
      <div className="relative w-24 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[
                { name: 'stamp', value: user.stampRate },
                { name: 'other', value: 1 - user.stampRate },
              ]}
              innerRadius={28}
              outerRadius={40}
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
        <div className="absolute top-1/2 left-1/2 text-sm text-white font-bold transform -translate-x-1/2 -translate-y-1/2">
          {(user.stampRate * 100).toFixed(0)}%
        </div>
      </div>
      <div
        className="w-5 h-5 rounded-full mt-2"
        style={{ backgroundColor: USER_COLORS[index % USER_COLORS.length] }}
      />
      <div className="mt-1 text-sm font-bold">{user.name}</div>
    </div>
  );

  return (
    <div className="bg-green-900 p-6 rounded-xl w-full max-w-md mx-auto text-white space-y-6">
      <div className="grid grid-cols-2 gap-6 justify-center">
        {top.map(renderUser)}
      </div>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {bottom.map(renderUser)}
      </div>
    </div>
  );
};

export default StampDonutChart;