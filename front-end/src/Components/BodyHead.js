import entete from '../assets/image/PHGKA2024Header.png';

export default function BodyHead(){
    return (
        <>
            <div style={{display: 'grid', placeItems: 'center', padding: "6rem 7rem 2rem 7rem"}}>
                <img src={entete} alt="Entête" style={{width: "30%"}}/>
                <div className="text">
                    <p className="text1">Annual Product Hunt Awards since 2015.</p>
                    <p className="text2">Vote now</p>
                </div>
            </div>
        </>
    );
}
