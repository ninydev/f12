import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

import styles from './App.css'

import PageAbout from "./pages/PageAbout";
import PageContact from "./pages/PageContact";
import PageHome from "./pages/PageHome";
import PageError from "./pages/PageError";

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}><PageAbout/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}><PageContact/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}><PageHome></PageHome></animated.div>,
]

export default function App() {
    const [index, set] = useState(0)
    const onClick = () => set(state => (state + 1) % 3)
    const transRef = useSpringRef()
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    useEffect(() => {
        transRef.start()
    }, [index])
    return (
        <div className={`flex fill ${styles.container}`} onClick={onClick}>
            {transitions((style, i) => {
                const Page = pages[i]
                return <Page style={style} />
            })}
        </div>
    )
}


// import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
// import { useTransition, animated } from 'react-spring';


// function App() {
//
//     let location  = useLocation();
//     const transitions = useTransition(items, {
//         enter: item => [
//             { opacity: item.opacity, height: item.height },
//             { life: '100%' },
//         ],
//         leave: item => async (next, cancel) => {
//             await next({ life: '0%' })
//             await next({ opacity: 0 })
//             await next({ height: 0 })
//         },
//         from: { life: '0%', opacity: 0, height: 0 },
//     })
//
//     return transitions((props, item) => (
//         <>
//             <animated.div style={props}>
//               <Routes>
//                    <Route path="/" element={<PageHome></PageHome>} />
//                    <Route path="/about" element={<PageAbout></PageAbout>} />
//                    <Route path="/contact" element={<PageContact></PageContact>} />
//                    <Route path="*" element={<PageError></PageError>} />
//               </Routes>
//             </animated.div>
//     </>
//   ));
// }

// export default App;
