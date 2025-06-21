import { useParams, useNavigate } from "react-router-dom";
import BudgetBox from "./BudgetBox";
import logo from "../assets/donutChart.jpg";

export default function Calculator() {
    const budgetData = [
        { cost: "$2000", category: "Transportation", link: "/trips" },
        { cost: "$80", category: "Transport", link: "/home-page" },
        { cost: "$150", category: "Rent", link: "/trips" },
        { cost: "$30", category: "Utilities", link: "/home-page" },
        { cost: "$60", category: "Dining", link: "/trips" },
        { cost: "$20", category: "Entertainment", link: "/home-page" },
        { cost: "$90", category: "Shopping", link: "/trips" },
        { cost: "$50", category: "Subscriptions", link: "/home-page" },
        { cost: "$40", category: "Health", link: "/trips" },
        { cost: "$25", category: "Gifts", link: "/home-page" },
        { cost: "$70", category: "Travel", link: "/trips" },
        { cost: "$15", category: "Education", link: "/home-page" },
        { cost: "$100", category: "Savings", link: "/trips" },
        { cost: "$10", category: "Misc.", link: "/home-page" },
    ];
    return (
        <div className="h-screen flex flex-col gap-20 pt-20 absolute inset-0" style={{ backgroundColor: "#D7E7D4" }}>
            <div className="flex justify-center gap-100 px-5">
                <img src={logo} alt="Logo" className="w-32 h-auto" />
                <img src={logo} alt="Logo" className="w-32 h-auto" />
            </div>
            <div className="flex gap-1 overflow-x-auto flex-nowrap scrollbar-hide">
                {budgetData.map((item, i) => (
                    <div key={i} className="flex-shrink-0">
                        <BudgetBox cost={item.cost} category={item.category} path={item.link} />
                    </div>
                ))}
            </div>
        </div>
    );
}