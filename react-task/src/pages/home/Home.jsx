import Header from "../../comp/header";
import Footer from "../../comp/Footer";
import Loading from "../../comp/Loading";
import Erroe404 from '../erroe404';
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
// import { sendEmailVerification } from "firebase/auth";
import "./Home.css"


const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  // const sendAgain = () => {
  //   sendEmailVerification(auth.currentUser).then(() => {
  //     console.log("Email verification sent!");
  //     // ...
  //   });
  // };


  if (error) {
    return <Erroe404 />;
  }


  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <style type="text/css">{`.Light main h1 span{color: #222}   `}
          </style>

        </Helmet>

        <Header />

        <main>
          <h1 style={{ fontSize: "28px" }}>
            {" "}
            <span>Welcome to React Level 2 🔥🔥🔥</span>{" "}
          </h1>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue...{" "}
            <span>
              <i className="fa-solid fa-heart"></i>
            </span>
          </p>
        </main>

        <Footer />
      </>
    );
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
          </Helmet>

          <Header />

          <main className="home">
          {/* OPTIONS */}
           <section className="flex parent-of-btns mt">

            <button>Newset </button>
           
            <button>Oldest </button>
 <select>
              <option value="n1">All Tasks</option>
              <option value="n1">Completed</option>
              <option value="n1">Not Completed</option>

            </select>
           </section>

           {/* SHOW ALL TASKS */}
           <section className="mt flex all-tasks">
            <article dir="auto" className="one-task">
              <h2>New task</h2>
              <ul><li>Sub task1 </li>
              <li>Sub task2 </li></ul>
              

              <p className="time"> a day ago</p>
            </article>
            <article  dir="auto" className="one-task">
              <h2>New task</h2>
              <ul><li>Sub task1 </li>
              <li>Sub task2 </li></ul>
              

              <p className="time"> a day ago</p>
            </article>
            <article dir="auto" className="one-task">
              <h2>New task</h2>
              <ul><li>Sub task1 </li>
              <li>Sub task2 </li></ul>
              

              <p className="time"> a day ago</p>
            </article>
            <article dir="auto" className="one-task">
              <h2>مهام اليوم</h2>
              <ul><li>تمام </li>
              <li>ماشي </li></ul>
              

              <p className="time"> a day ago</p>
            </article>
           </section>

            {/* ADD NEW TASK BTN */}
            <section className="mt">
              <button className="add-task-btn">ADD new task <i className="fa-solid fa-plus"></i></button>
            </section>

          </main>
          <Footer />
        </>
      );
    }

    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
          </Helmet>

          <Header />

         

          <Footer />
        </>
      );
    }
  }
};

export default Home;
