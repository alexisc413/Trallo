import backgroundImage from '../assets/dashboardBG.png';
import {PieChart, Pie, Cell, Label} from 'recharts';
import { useNavigate } from "react-router-dom";


function Dashboard() {
 
  const data = [
    { name: 'Category A', value: 900 },
    { name: 'Category B', value: 300 },
  ];

  // colors for each segment
  const COLORS = ['#307044', '#aaaaaa'];

  const navigate = useNavigate();

    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 filter blur-sm bg-center-bg-cover"
          style={{ 
            backgroundImage: `url(${backgroundImage})`
          }}>
        </div>

        {/* side by side boxes */}
        <div className="flex px-12 mt-20 gap-2 relative">
          {/* White transparant big box */}
          <div className="flex rounded-[50px] p-6 ml-10 mt-5 relative"
            style={{ backgroundColor: 'rgba(245, 245, 245, 0.45)', height: '85vh', width: '50%'}}  
          >
            <div className="absolute top-20 left-30 rounded-full p-6 text-[20px] text-center flex items-center justify-center"
              style={{ backgroundColor: 'rgba(245, 245, 245, 0.55)', height:'20vh', width:'25%' }}>
              <PieChart width={200} height={200}>
                <Pie 
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                  fill="#000000">
                    {data.map((entry, index)=> (
                      <Cell key={'cell-${index}'} fill={COLORS[index% COLORS.length]} />
                    ))}
                    <Label
                      position="center"
                      content={({ viewBox }) => (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          fill="#000000"
                        >
                          <tspan x={viewBox.cx} dy="-6">30%</tspan>
                          <tspan x={viewBox.cx} dy="20">Budget Spent</tspan>
                        </text>
                      )}
                    />
                </Pie>
              </PieChart>
            </div>
            
            <div className="absolute top-20 right-30 rounded-[40px] p-6 shadow-lg
              text-[48px] text-center hover:scale-105"
              style={{ backgroundColor: 'rgba(0, 103, 9, 0.66)', height: '20vh', width: '40%'}}
              // CHANGE TO AISHWARYA'S PAGE
              onClick={() => navigate('/')}>
                Create / Edit Budget
            </div>

            {/* 6 buttons for trip categories */}
            <div className="absolute top-80 left-12 rounded-[40px] p-6 shadow-lg
              text-[30px] text-center flex items-center hover:scale-105"
              style={{ backgroundColor: 'rgba(245, 245, 245, 0.55)', height: '200px', width: '200px'}}
              // CHANGE TO AISHWARYA'S PAGE
              onClick={() => navigate('/')}>
                Travel Buddies
            </div>
            <div className="absolute top-80 left-75 rounded-[40px] p-6 shadow-lg
              text-[30px] text-center flex items-center hover:scale-105"
              style={{ backgroundColor: 'rgba(245, 245, 245, 0.55)', height: '200px', width: '200px'}}
              // CHANGE TO AISHWARYA'S PAGE
              onClick={() => navigate('/')}>
                Home Away From Home
            </div>
            <div className="absolute top-80 right-12 rounded-[40px] p-6 shadow-lg
              text-[30px] text-center flex items-center hover:scale-105"
              style={{ backgroundColor: 'rgba(245, 245, 245, 0.55)', height: '200px', width: '200px'}}
              // CHANGE TO AISHWARYA'S PAGE
              onClick={() => navigate('/')}>
                Bucket List
            </div>
            <div className="absolute top-145 left-12 rounded-[40px] p-6 shadow-lg
              text-[30px] text-center flex items-center hover:scale-105"
              style={{ backgroundColor: 'rgba(245, 245, 245, 0.55)', height: '200px', width: '200px'}}
              // CHANGE TO AISHWARYA'S PAGE
              onClick={() => navigate('/')}>
                Baggage Fillings
            </div>
            <div className="absolute top-145 left-75 rounded-[40px] p-6 shadow-lg
              text-[30px] text-center flex items-center hover:scale-105"
              style={{ backgroundColor: 'rgba(245, 245, 245, 0.55)', height: '200px', width: '200px'}}
              // CHANGE TO AISHWARYA'S PAGE
              onClick={() => navigate('/')}>
                Must Eats
            </div>
            <div className="absolute top-145 right-12 rounded-[40px] p-6 shadow-lg
              text-[30px] text-center flex items-center hover:scale-105"
              style={{ backgroundColor: 'rgba(245, 245, 245, 0.55)', height: '200px', width: '200px'}}
              // CHANGE TO AISHWARYA'S PAGE
              onClick={() => navigate('/')}>
                Trip Chatter
            </div>

          </div>
          {/* Green transparant big box */}
          <div className="flex rounded-[50px] p-6 ml-18 mt-5 relative"
            style={{ backgroundColor: 'rgba(0, 103, 9, 0.45)', height: '85vh', width: '40%'}}  
          >
            <div className="absolute top-20 left-18 rounded-[40px] shadow-lg
              text-center"
              style={{ backgroundColor: 'rgba(5, 66, 10, 0.35)', height: '200px', width: '75%'}}
            >
              <h1 className="text-[70px]"  style={{fontWeight: 'bold'}}>
                Trip Title
              </h1>
              <h2>
                Date:
              </h2>
              <h2>
                Destination:
              </h2>
              <h2>
                Documents:
              </h2>
            </div>
            <div className="absolute top-80 left-18 rounded-[40px] p-6 shadow-lg
              text-center"
              style={{ backgroundColor: 'rgba(5, 66, 10, 0.35)', height: '200px', width: '200px'}}
            >
              <h1 className="text-[70px]" style={{fontWeight: 'bold'}}>
                100
              </h1>
              <h2>
                DAYS TO GO!
              </h2>
            </div>
            <div className="absolute top-80 right-18 rounded-[40px] p-6 shadow-lg
              text-center"
              style={{ backgroundColor: 'rgba(5, 66, 10, 0.35)', height: '200px', width: '200px'}}
            >
              <h1 className="text-[70px]" style={{fontWeight: 'bold'}}>
                50
              </h1>
              <h2>
                DAYS OF FUN!
              </h2>
            </div>
            <div className="absolute top-145 left-18 rounded-[40px] p-6 shadow-lg
              text-center"
              style={{ backgroundColor: 'rgba(5, 66, 10, 0.35)', height: '200px', width: '75%'}}
            >
              Things to know from the CDC
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;