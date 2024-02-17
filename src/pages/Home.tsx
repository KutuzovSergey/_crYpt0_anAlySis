import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { changeModalLogin, changeModalRegistr } from "../action/actionCreators";
import Banner from "../components/Banner";
import MyModal from "../components/UI/MyModal/MyModal";
import InfoApplication from "../components/InfoApplication";
import ModalLoginForm from "../components/ModalLoginForm";
import ModalRegistrForm from "../components/ModalRegistrForm";
import SubscribeNews from '../components/SubscribeNews';

import '../styles/Home.scss';

const Home:React.FC = () => {
    const modalLogin: boolean = useSelector((state: RootState) => state.generalApp.modalLogin);
    const modalRegistr: boolean = useSelector((state: RootState) => state.generalApp.modalRegistr);
    const dispatch = useDispatch();

    const setModalLogin = (booleanLogin: boolean): void =>{
        dispatch(changeModalLogin(booleanLogin));
    };

    const setModalRegistr = (booleanRegistr: boolean): void =>{
        dispatch(changeModalRegistr(booleanRegistr));
    }

    return (
        <div className="home">
            <Banner/>
            <SubscribeNews/>
            <InfoApplication/>
            <MyModal 
                className="modal" 
                active={modalLogin} 
                setActive={setModalLogin}>
                    <ModalLoginForm />
            </MyModal>
            <MyModal 
                className="modal" 
                active={modalRegistr} 
                setActive={setModalRegistr}>
                    <ModalRegistrForm active={modalRegistr} setActive={setModalRegistr} />
            </MyModal>
        </div>
    )
}

export default Home;