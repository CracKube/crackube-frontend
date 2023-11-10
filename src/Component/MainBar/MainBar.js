import { useState } from 'react';
import Wand from '../../Assets/magicWand.svg';
import Follow from '../../Assets/userFollower.svg';
import Dashboard from '../Dashboard/Dashboard';
import styles from '../MainBar/MainBar.module.css';

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
    );
}