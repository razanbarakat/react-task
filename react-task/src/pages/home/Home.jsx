import Header from "../../comp/header";
import Footer from "../../comp/Footer";
import Loading from "../../comp/Loading";
import Erroe404 from "../erroe404";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
// Level 3
import "./Home.css";

import { useState } from "react";
import Modal from "../../shared/Modal";

const Home = () => {
  const [array, setarray] = useState([]);
  const [subTask, setsubTask] = useState("");

const addBTN = () => {
  array.push(subTask)
  console.log(array)
  setsubTask("")
}


  







  const [user, loading, error] = useAuthState(auth);


  const sendAgain = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email verification sent!");
      // ...
    });
  };

  // LEVEL3
  const [showModal, setshowModal] = useState(false);
  const forgotPassword = () => {
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
  };

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
          <style type="text/css">{`.Light main h1 span{color: #222}   `}</style>
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
    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main>
            <p>
              {" "}
              Welcome: {user.displayName}{" "}
              <span>
                <i className="fa-solid fa-heart"></i>{" "}
              </span>
            </p>

            <p>Please verify your email to continue ✋ </p>
            <button
              onClick={() => {
                sendAgain();
              }}
              className="delete"
            >
              Send email
            </button>
          </main>

          <Footer />
        </>
      );
    }

    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
          </Helmet>

          <Header />

          <main className="home">
            {/* OPIONS (filtered data) */}
            <section className="parent-of-btns flex mtt">
              <button>Newest first</button>

              <button>Oldest first</button>
              <select id="browsers">
                <option value="ddddd"> All Tasks </option>
                <option value="dddddd"> Completed </option>
                <option value="dddddd"> Not Completed </option>
              </select>
            </section>

            {/* SHOW all tasks */}
            <section className="flex all-tasks mt">
              <article dir="auto" className="one-task">
                <Link to={"/edit-task"}>
                  <h2> New Task </h2>
                  <ul>
                    <li>Sub task 1 </li>
                    <li> Sub task 2</li>
                  </ul>

                  <p className="time">a day ago</p>
                </Link>
              </article>
            </section>

            {/* Add new task BTN */}
            <section className="mt">
              <button
                onClick={() => {
                  setshowModal(true);
                }}
                className="add-task-btn"
              >
                Add new task <i className="fa-solid fa-plus"></i>
              </button>
            </section>

            {showModal && (
              <Modal closeModal={closeModal}>
                <div style={{ textAlign: "left" }}>
                  <input
                    onChange={(eo) => {}}
                    required
                    placeholder=" Add title : "
                    type="text"
                  />

                  <div>
                    <input
                      onChange={(eo) => {

                        setsubTask(eo.target.value)
                      }}
                      placeholder=" details "
                      type="email"
                      value={subTask}
                    />

                    <button
                      onClick={(eo) => {
                        eo.preventDefault();
                        addBTN()
                      }}
                    >
                      Add
                    </button>
                  </div>

                  <ul>
                    {array.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <button
                    onClick={(eo) => {
                      eo.preventDefault();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </Modal>
            )}
          </main>

          <Footer />
        </>
      );
    }
  }
};

export default Home;



// import Header from "../../comp/header";
// import Footer from "../../comp/Footer";
// import Loading from "../../comp/Loading";
// import Erroe404 from "../erroe404";
// import { Helmet } from "react-helmet-async";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase/config";
// import { Link } from "react-router-dom";
// // import { sendEmailVerification } from "firebase/auth";
// import "./Home.css";
// import Modal from "../../shared/Modal";
// import { useState } from "react";

// const Home = () => {
//   const [user, loading, error] = useAuthState(auth);
//   console.log(user);

//   const [array, setArray] = useState([]);
//   const [showModal, setshowModal] = useState(false);
//   const [subTask, setsubTask] = useState("");
//   const forgotPassword = () => {
//     setshowModal(true);
//   };

//   const addBtn = () => {
//     array.push(subTask);
//     console.log(array);
//     setsubTask("");
//   };

//   const closeModal = () => {
//     setshowModal(false);
//   };

//   if (error) {
//     return <Erroe404 />;
//   }

//   if (loading) {
//     return <Loading />;
//   }

//   if (!user) {
//     return (
//       <>
//         <Helmet>
//           <title>HOME Page</title>
//           <style type="text/css">{`.Light main h1 span{color: #222}   `}</style>
//         </Helmet>

//         <Header />

//         <main>
//           <h1 style={{ fontSize: "28px" }}>
//             {" "}
//             <span>Welcome to React Level 2 🔥🔥🔥</span>{" "}
//           </h1>
//           <p className="pls">
//             Please{" "}
//             <Link style={{ fontSize: "30px" }} to="/signin">
//               sign in
//             </Link>{" "}
//             to continue...{" "}
//             <span>
//               <i className="fa-solid fa-heart"></i>
//             </span>
//           </p>
//         </main>

//         <Footer />
//       </>
//     );
//   }

//   if (user) {
//     if (user.emailVerified) {
//       return (
//         <>
//           <Helmet>
//             <title>HOME Page</title>
//           </Helmet>

//           <Header />

//           <main className="home">
//             {/* OPTIONS */}
//             <section className="flex parent-of-btns mt">
//               <button>Newset </button>

//               <button>Oldest </button>
//               <select>
//                 <option value="n1">All Tasks</option>
//                 <option value="n1">Completed</option>
//                 <option value="n1">Not Completed</option>
//               </select>
//             </section>

//             {/* SHOW ALL TASKS */}
//             <section className="mt flex all-tasks">
//               <article dir="auto" className="one-task">
//                 <h2>New task</h2>
//                 <ul>
//                   <li>Sub task1 </li>
//                   <li>Sub task2 </li>
//                 </ul>

//                 <p className="time"> a day ago</p>
//               </article>
//               <article dir="auto" className="one-task">
//                 <h2>New task</h2>
//                 <ul>
//                   <li>Sub task1 </li>
//                   <li>Sub task2 </li>
//                 </ul>

//                 <p className="time"> a day ago</p>
//               </article>
//               <article dir="auto" className="one-task">
//                 <h2>New task</h2>
//                 <ul>
//                   <li>Sub task1 </li>
//                   <li>Sub task2 </li>
//                 </ul>

//                 <p className="time"> a day ago</p>
//               </article>
//               <article dir="auto" className="one-task">
//                 <h2>مهام اليوم</h2>
//                 <ul>
//                   <li>تمام </li>
//                   <li>ماشي </li>
//                 </ul>

//                 <p className="time"> a day ago</p>
//               </article>
//             </section>

//             {/* ADD NEW TASK BTN */}
//             <section className="mt">
//               <button
//                 onClick={() => {
//                   setshowModal(true);
//                 }}
//                 className="add-task-btn"
//               >
//                 ADD new task <i className="fa-solid fa-plus"></i>
//               </button>
//             </section>
//             {showModal && (
//               <Modal closeModal={closeModal}>
//                 <div style={{ textAlign: "left" }}>
//                   <input
//                     onChange={(eo) => {}}
//                     required
//                     placeholder=" Add title "
//                     type="title"
//                   />
//                   <div>
//                     <input
//                       onChange={(eo) => {
//                         setsubTask(eo.target.value);
//                       }}
//                       placeholder=" details "
//                       type="text"
//                       value={subTask}
//                     />
//                     <button
//                       onClick={(eo) => {
//                         eo.preventDefault();
//                         addBtn();
//                       }}
//                     >
//                       Add
//                     </button>
//                   </div>

//                   <ul>
//                     {array.map((item) => (
//                       <li key={item}>{item}</li>
//                     ))}
//                   </ul>

//                   <button
//                     onClick={(eo) => {
//                       eo.preventDefault();
//                     }}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </Modal>
//             )}
//           </main>
//           <Footer />
//         </>
//       );
//     }

//     if (!user.emailVerified) {
//       return (
//         <>
//           <Helmet>
//             <title>HOME Page</title>
//           </Helmet>

//           <Header />

//           <Footer />
//         </>
//       );
//     }
//   }
// };

// export default Home;
