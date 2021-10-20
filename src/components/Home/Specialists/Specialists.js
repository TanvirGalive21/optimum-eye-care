import React from 'react';
import specialists1 from '../../../images/specialists/main1.png'
import specialists2 from '../../../images/specialists/main2.png'
import specialists3 from '../../../images/specialists/main3.png'
import specialists4 from '../../../images/specialists/main4.png'
import specialists5 from '../../../images/specialists/main5.png'
import specialists6 from '../../../images/specialists/main6.png'
import Specialist from '../Specialist/Specialist';
import './Specialists.css'

const specialists = [
    {
        img:specialists1,
        name:'Dr. Jolian Acenj',
        expertize: 'Surgery Specialist'
    },
    {
        img:specialists2,
        name:'Dr. Arnica Sarah',
        expertize: 'Surgery Specialist'
    },
    {
        img:specialists3,
        name:'Dr. Jlian Acenj',
        expertize: 'Lasik Specialist'
    },
    {
        img:specialists4,
        name:'Dr. Triben Dina',
        expertize: 'Lasik Specialist'
    },
    {
        img:specialists5,
        name:'Dr. Alena Malic',
        expertize: 'Contact Lens Specialist'
    },
    {
        img:specialists6,
        name:'Dr. Malina Angel',
        expertize: 'Lasik Specialist'
    }
]

const Specialists = () => {
    return (
        <div id="specialists" className="m-5">
            <div className="m-5">
            <h5 className="text-center text-info">Doctors</h5>
            <h2 className="">Optimum Eye Care Specialist</h2>
            </div>
            <div className="specialist-container">
                {
                    specialists.map(specialist => <Specialist
                        key = {specialist.name}
                        specialist = {specialist}
                   >

                    </Specialist>)
                }
            </div>
        </div>
    );
};

export default Specialists;