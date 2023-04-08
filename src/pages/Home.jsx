import React, { useContext } from "react";
import { AutchContext } from "../context";
import Banner from "../components/Banner";
import MyModal from "../components/UI/MyModal/MyModal";
import InfoApplication from "../components/InfoApplication";
import ModalLoginForm from "../components/ModalLoginForm";
import ModalRegistrForm from "../components/ModalRegistrForm";

import '../styles/Home.scss';

const Home = () => {
    const {modalLogin, setModalLogin, modalRegistr, setModalRegistr,} = useContext(AutchContext);

    return (
        <div className="home">
            <Banner/>
            <InfoApplication/>
            <MyModal className="modal" active={modalLogin} setActive={setModalLogin}>
                <ModalLoginForm />
            </MyModal>
            <MyModal className="modal" active={modalRegistr} setActive={setModalRegistr}>
                <ModalRegistrForm/>
            </MyModal>
        </div>
    )
}

export default Home;