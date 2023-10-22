import styles from '../MainBar/MainBar.module.css'
import TopNavBar from '../NavBar/TopNavBar';
import Dashboard from '../Dashboard/Dashboard';
import Heading from './Heading/Heading';
import Infinite from '../InfinitePart/Infinite';
import { Card1 } from '../Constants';
import Wand from '../../Assets/magicWand.svg';
import Follow from '../../Assets/userFollower.svg';
import { ThemeContext } from '../Pages/Home';
import { useState } from 'react';

export default function MainBar({theme}) {
    const [clicked, setClicked] = useState(0);
    const list = [
        {
          name: 'Magic Recommendation',
          img: 'Wand',
        },
        {
          name: 'Following',
          img: {Follow},
        },
      ];
    return (
        <ThemeContext.Provider >
        <div className={styles.mainbar}>
        <div className="home-options">
                {list.map((item, i) => (
                    <div key={i} className= {clicked === i ? 'clicked-menu': 'not-clicked'} onClick={() => setClicked(i)}>
                        {item.name === 'Magic Recommendation' ? <img src={Wand} alt="" /> : <img src={Follow} alt="" />}
                        <p>{item.name}</p>
                    </div>
                ))}
                </div>
            <Dashboard type='card1' theme = {theme} />
        </div>
        </ThemeContext.Provider>
    );
}