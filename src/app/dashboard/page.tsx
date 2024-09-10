import CarsTable from "../components/CarsTable";

export default function Dashboard(){
    return (
        <div className="flex flex-grow flex-col p-8">
            <CarsTable />
        </div>
    )
}