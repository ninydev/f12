import { useSpring, animated } from 'react-spring'

export default function Opticality() {

    const props = useSpring({
        from: { opacity: 0 } ,
        to: { opacity: 1, background: '#f00'},
        leave: { opacity: 0 },
        delay: 1000
    })

    const styles = useSpring({
        to: async (next, cancel) => {
            await next({ opacity: 1, color: '#ffaaee' })
            // await next({ opacity: 0, color: 'rgb(14,26,19)' })
        },
        from: { opacity: 0, color: 'red' },
        // leave: async (next, cancel) => {
        //     await next({opacity: 0, color: '#ffaaee'})
        // },
        delay: 1000
    })
    // ...
    return <animated.div style={styles}>I will fade in and out</animated.div>

    // return (
    //     <animated.div style={props}>
    //         I will fade in
    //     </animated.div>)

}