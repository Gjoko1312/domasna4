import  { Student }  from "./components/Student";
import  { Semester }  from "./components/Semester";

function App() {

  let students = [

    {name: "Ivana", surname: "Martinovska", index: 10504},
    {name: "Jovan", surname: "Arnautov", index: 20457},
    {name: "Milan", surname: "Bekric", index: 70548},
    {name: "Stefan", surname: "Trajkovski", index: 40578},
    {name: "Risto", surname: "Ristov", index: 60578},
    {name: "IVan", surname: "Ivanov", index: 60548},
    {name: "Marija", surname: "Arsova", index: 60577},
    {name: "Irina", surname: "Postolova", index: 74125},
    ];
  return (
    <div className="App">
      <>
       { <Student students={students}/> }
      </>
      <>{<Semester shouldShowSemester={true} />} </>
    </div>
  );
}

export default App;
