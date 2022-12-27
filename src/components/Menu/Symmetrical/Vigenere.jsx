import React, {useState} from 'react';
import Select from "react-select";

const Vigenere = (props) => {
    const [alphabet, setAlphabet] = useState("");
    const [encrMessage, setEMessage] = useState('');
    const [dencrMessage, setDMessage] = useState('');
    const [k, setK] = useState('');
    const [encryptedMessage, setEnc] = useState('')
    const [decryptedMessage, setDec] = useState('')

    let encM = () => {
        setEnc(props.encMess(encrMessage, alphabet, k))
    }
    let decM = () => {
        setDec(props.decMess(dencrMessage, alphabet, k))
    }
    let handleChange = e => {
        setAlphabet(e.alphabet)
    }

    return <div
        className="text-indigo-900 font-sans text-lg border-1 border-purple-600 rounded-lg m-10 p-5 shadow-xl bg-violet-50">
        <div className="border-b-2 border-purple-400 mb-2 pb-1">
            <h2 className="text-2xl">{props.symNames[4].name}</h2>
        </div>
        <div className="flex items-center mb-2">
            <p className="mr-4">Оберіть алфавіт:</p>
            <Select
                className="w-2/5 hover:none"
                placeholder=''
                options={props.langs}
                onChange={handleChange}
            />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 sm:grid-cols-1">
            <div className="">
                <div className="flex flex-col">
                    <div className="flex">
                        <p className="mr-4">Повідомлення:</p>
                        <input className="mb-2 w-full bg-violet-50 outline-0 border-b-2 border-purple-400" type="text"
                               name="message" value={encrMessage}
                               onChange={e => setEMessage(e.target.value.toUpperCase())}></input>
                    </div>
                    <div className="flex">
                        <p className="mr-4">Ключове слово:</p>
                        <input className="mb-2 w-48 bg-violet-50 outline-0 border-b-2 border-purple-400" type="text" name="k" value={k} onChange ={e => setK(e.target.value.toUpperCase())} placeholder='наприклад: СОНЦЕ'></input>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <button
                        type="submit"
                        onClick={encM}
                        className='mb-4 border w-40 rounded border-purple-500 hover:bg-purple-500 hover:text-white'
                    >
                        Зашифрувати
                    </button>
                    <p className="mb-4">Зашифроване повідомлення: {encryptedMessage}</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col">
                    <div className="flex">
                        <p className="mr-4">Повідомлення:</p>
                        <input className="mb-2 w-full bg-violet-50 outline-0 border-b-2 border-purple-400" type="text"
                               name="message" value={dencrMessage}
                               onChange={e => setDMessage(e.target.value.toUpperCase())}></input>
                    </div>
                    <div className="flex">
                        <p className="mr-4">Ключове слово:</p>
                        <input className="mb-2 w-48 bg-violet-50 outline-0 border-b-2 border-purple-400" type="text" name="k" value={k} onChange ={e => setK(e.target.value.toUpperCase())} placeholder='наприклад: СОНЦЕ'></input>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <button
                        type="submit"
                        onClick={decM}
                        className='mb-4 border w-40 rounded border-purple-500 hover:bg-purple-500 hover:text-white'
                    >
                        Розшифрувати
                    </button>
                    <p>Розшифроване повідомлення: {decryptedMessage}</p>
                </div>
            </div>
        </div>
    </div>;
};

export default Vigenere;