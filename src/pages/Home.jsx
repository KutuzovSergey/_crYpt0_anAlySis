import React, { useContext } from "react";
import { AppContext } from "../context";
import Banner from "../components/Banner";
import MyModal from "../components/UI/MyModal/MyModal";
import InfoApplication from "../components/InfoApplication";
import ModalLoginForm from "../components/ModalLoginForm";
import ModalRegistrForm from "../components/ModalRegistrForm";
import SubscribeNews from '../components/SubscribeNews';

import '../styles/Home.scss';

const Home = () => {
    const {modalLogin, setModalLogin, setModalRegistr, modalRegistr,} = useContext(AppContext);

    // console.log(modalRegistr);

    return (
        <div className="home">
            <Banner/>
            <SubscribeNews/>
            <InfoApplication/>
            <MyModal className="modal" active={modalLogin} setActive={setModalLogin}>
                <ModalLoginForm />
            </MyModal>
            <MyModal className="modal" active={modalRegistr} setActive={setModalRegistr}>
                <ModalRegistrForm active={modalRegistr} setActive={setModalRegistr} />
            </MyModal>
        </div>
    )
}

export default Home;