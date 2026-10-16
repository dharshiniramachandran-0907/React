// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                  </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import React from 'react';
// import './App.css';
// import reactimg  from './assets/reactimg.png';

// const App = () => {
//   return (
//     <div>
     
//      <h1 className="great">Hello + React</h1>
// <img src={reactimg} alt="React" />
//     </div>
//   );
// }
// export default App;
// 
// import React from 'react';    
//  import './App.css';
//  import img from './assets/reactimg.png';
//  import Button from './components/UI/button/button.jsx';

//  const App = () => {
//   return (
//     <div>
//     {/* <h1 className="great">Hello React</h1>
//       <img src={img} alt="Sample" width="200" />
//      <br /><br />
//      <label htmlFor="username">Enter your name:</label>
//      <input type="text" id="username" placeholder="Enter name" />
//        <br /><br />
//       <Button name="Click Me" onClick={() => alert('Hello React!')} />*/}
// <label>Counter:{counter}</label>
//       <button name= {"Increment"} onClick={()=>setCounter(counter+1)}>Increment</button>
//       <button name= {"Decrement"} onClick={()=>setCounter(counter-1)}>Decrement</button>

//    </div>
//   );
//  };
// export default App; 

// import { useState } from 'react';
// import './App.css';
// import img from './assets/reactimg.png';
// import Button from './components/UI/button/button';

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h1 className="greet">Hello React</h1>
//       <img src={img} alt="Sample" width="200" />
//       <br /><br />
//       <label htmlFor="username">Enter your name:</label>
//       <input type="text" id="username" placeholder="Enter name" />
//       <br /><br />
//       <label>Counter: {counter}</label>
//       <Button name="Increment" onClick={() => setCounter((prev) => prev + 1)} />
//       <Button name="Decrement" onClick={() => setCounter((prev) => prev - 1)} />
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState } from 'react';
// import './App.css';

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setData(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* <h1 className="greet">Hello! Vite + React</h1>
//       <img className="image" src={tulipImage} alt="Tulip" /><br />
//       <label>Name:</label> 
//       <input type="text" ></input><br></br>
//       <Button name="Hello all" onClick={() => alert('Button is clicked')} /> */}
//       <label>Counter:{counter}</label>
//       <button name= {"Increment"} onClick={()=>setCounter(counter+1)}>Increment</button>
//       <button name= {"Decrement"} onClick={()=>setCounter(counter-1)}>Decrement</button>

//       <h2>Users</h2>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;         









// import {useState} from "react";
// import Title from "./components/Title.jsx";
// function App() {
//   const [count, setCount]=useState(0);
//   return(
//     <>
//     <Title count={count} />
//     <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }
// export default App;


import { useCallback, useEffect, useState } from 'react';
import './App.css';

function getPhoneIdFromHash() {
  const match = window.location.hash.match(/^#\/phones\/(\d+)$/);
  return match ? match[1] : null;
}

function App() {
  const [phoneId, setPhoneId] = useState(getPhoneIdFromHash);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    function handleHashChange() {
      setPhoneId(getPhoneIdFromHash());
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  const showHttpStatus = useCallback((status, statusText, subject) => {
    const successful = status === 200;
    setToast({
      id: Date.now(),
      successful,
      message: successful
        ? `200 OK - ${subject} loaded successfully`
        : `${status} ${statusText} - Unable to load ${subject}`,
    });
  }, []);

  return (
    <>
      {phoneId
        ? <PhoneDetails phoneId={phoneId} onHttpStatus={showHttpStatus} />
        : <PhoneList onHttpStatus={showHttpStatus} />}
      {toast && (
        <div
          key={toast.id}
          className={`http-toast ${toast.successful ? 'http-toast-success' : 'http-toast-error'}`}
          role={toast.successful ? 'status' : 'alert'}
        >
          {toast.message}
        </div>
      )}
    </>
  );
}

function PhoneList({ onHttpStatus }) {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadMobiles() {
      try {
        const response = await fetch('https://dummyjson.com/products/category/smartphones', {
          cache: 'no-store',
        });
        onHttpStatus(response.status, response.statusText, 'phone list');
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data.products)) {
          throw new Error('The response did not contain a phone list.');
        }
        setMobiles(data.products);
      } catch (loadError) {
        console.error('Unable to load mobile phones:', loadError);
        setError(
          loadError instanceof Error
            ? `Unable to load phones: ${loadError.message}`
            : 'Unable to load phones. Please check your connection and try again.',
        );
      } finally {
        setLoading(false);
      }
    }

    loadMobiles();
  }, [onHttpStatus]);

  return (
    <main className="container">
      <h2>Mobile Phone Details</h2>

      {loading && <p className="status-message" role="status">Loading phones...</p>}
      {!loading && error && <p className="status-message error-message" role="alert">{error}</p>}
      {!loading && !error && mobiles.length === 0 && (
        <p className="status-message empty-message">No phones found.</p>
      )}

      {!loading && !error && mobiles.length > 0 && (
        <div className="mobile-container">
          {mobiles.map((mobile) => (
            <article className="card" key={mobile.id}>
              <img src={mobile.thumbnail} alt={mobile.title} />
              <h3>{mobile.title}</h3>
              <p><b>Brand:</b> {mobile.brand || 'N/A'}</p>
              <p><b>Price:</b> ${mobile.price}</p>
              <p><b>Rating:</b> {mobile.rating}</p>
              <p><b>Stock:</b> {mobile.stock}</p>
              <a className="details-link" href={`#/phones/${mobile.id}`}>
                View Details
              </a>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

function PhoneDetails({ phoneId, onHttpStatus }) {
  const [mobile, setMobile] = useState(null);
  const [relatedMobiles, setRelatedMobiles] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [relatedError, setRelatedError] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadMobile() {
      setLoading(true);
      setError('');
      setMobile(null);

      try {
        const response = await fetch(`https://dummyjson.com/products/${phoneId}`, {
          signal: controller.signal,
          cache: 'no-store',
        });
        if (!controller.signal.aborted) {
          onHttpStatus(response.status, response.statusText, 'phone details');
        }
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        setMobile(await response.json());
      } catch (loadError) {
        if (!controller.signal.aborted) {
          console.error('Unable to load phone details:', loadError);
          setError(
            loadError instanceof Error
              ? `Unable to load phone details: ${loadError.message}`
              : 'Unable to load phone details. Please try again later.',
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadMobile();
    return () => controller.abort();
  }, [phoneId, onHttpStatus]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRelatedMobiles() {
      setRelatedLoading(true);
      setRelatedError('');
      setRelatedMobiles([]);

      try {
        const response = await fetch(
          'https://dummyjson.com/products/category/smartphones',
          { signal: controller.signal, cache: 'no-store' },
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data.products)) {
          throw new Error('The response did not contain a phone list.');
        }

        setRelatedMobiles(
          data.products.filter((phone) => String(phone.id) !== phoneId).slice(0, 2),
        );
      } catch (loadError) {
        if (!controller.signal.aborted) {
          console.error('Unable to load related phones:', loadError);
          setRelatedError(
            loadError instanceof Error
              ? `Could not load related phones: ${loadError.message}`
              : 'Could not load related phones.',
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setRelatedLoading(false);
        }
      }
    }

    loadRelatedMobiles();
    return () => controller.abort();
  }, [phoneId]);

  return (
    <main className="container">
      <a className="back-link" href="#/">← Back to phones</a>

      {loading && <p className="status-message" role="status">Loading phone details...</p>}
      {!loading && error && <p className="status-message error-message" role="alert">{error}</p>}
      {!loading && !error && !mobile && (
        <p className="status-message empty-message">Phone not found.</p>
      )}

      {!loading && !error && mobile && (
        <>
          <article className="phone-details">
            <div className="phone-gallery">
              {(mobile.images?.length ? mobile.images : [mobile.thumbnail]).map((image, index) => (
                <img key={image} src={image} alt={`${mobile.title}, image ${index + 1}`} />
              ))}
            </div>

            <section className="phone-information">
              <h2>{mobile.title}</h2>
              <p>{mobile.description}</p>
              <p><b>Brand:</b> {mobile.brand || 'N/A'}</p>
              <p><b>Price:</b> ${mobile.price}</p>
              <p><b>Discount:</b> {mobile.discountPercentage}%</p>
              <p><b>Rating:</b> {mobile.rating} / 5</p>
              <p><b>Stock:</b> {mobile.stock}</p>
              <p><b>Availability:</b> {mobile.availabilityStatus || 'N/A'}</p>
              <p><b>Category:</b> {mobile.category || 'N/A'}</p>
              <p><b>SKU:</b> {mobile.sku || 'N/A'}</p>
              <p><b>Weight:</b> {mobile.weight ? `${mobile.weight} g` : 'N/A'}</p>

              {mobile.dimensions && (
                <p>
                  <b>Dimensions:</b> {mobile.dimensions.width} × {mobile.dimensions.height} × {mobile.dimensions.depth}
                </p>
              )}

              <h3>Shipping and Returns</h3>
              <p><b>Warranty:</b> {mobile.warrantyInformation || 'N/A'}</p>
              <p><b>Shipping:</b> {mobile.shippingInformation || 'N/A'}</p>
              <p><b>Return policy:</b> {mobile.returnPolicy || 'N/A'}</p>
              <p><b>Minimum order quantity:</b> {mobile.minimumOrderQuantity || 'N/A'}</p>
            </section>
          </article>

          <section className="related-phones" aria-labelledby="related-phones-title">
            <h2 id="related-phones-title">You May Also Like</h2>
            {relatedLoading && (
              <p className="status-message" role="status">Loading related phones...</p>
            )}
            {!relatedLoading && relatedError && (
              <p className="status-message error-message" role="alert">{relatedError}</p>
            )}
            {!relatedLoading && !relatedError && relatedMobiles.length === 0 && (
              <p className="status-message empty-message">No other phones found.</p>
            )}
            {!relatedLoading && !relatedError && relatedMobiles.length > 0 && (
              <div className="related-phone-list">
                {relatedMobiles.map((phone) => (
                  <article className="related-phone-card" key={phone.id}>
                    <img src={phone.thumbnail} alt={phone.title} />
                    <h3>{phone.title}</h3>
                    <p><b>Price:</b> ${phone.price}</p>
                    <a href={`#/phones/${phone.id}`}>View Details</a>
                  </article>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}

export default App;
//