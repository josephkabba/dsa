import { useState, useEffect } from "react";
import DoublyLinkedList from "../../datastructures/linkedList/dLinkedList";
import SinglylinkedList from "../../datastructures/linkedList/sLinkedList";

const types = {

    listType: {
        singlyLinkedList: "SinglyLinkedList",
        doubleLinkedList: "DoubleLinkedList"
    },

    action: {
        addItem: "add",
        removeItem: "remove"
    },

    section: {
        beginning: "beginning",
        before: "before",
        after: "after",
        end: "end"
    }
};

function LinkedList() {
    const [Element, setElement] = useState(0);
    const [SelectedValue, setSelectedValue] = useState({ listType: "SinglyLinkedList", action: "add", section: "beginning" });
    const [ListItems, setListItems] = useState({ sllSize: 0, dllSize: 0, sllElements: [], dllElements: [] });
    const [Lists, setLists] = useState({ SLinkedList: null, DLinkedList: null });

    useEffect(() => {
        const sll = new SinglylinkedList();
        const dll = new DoublyLinkedList();

        setLists({ SLinkedList: sll, DLinkedList: dll });
        setListItems({ sllSize: sll.size, dllSize: dll.size, sllElements: sll.printList(), dllElements: dll.printList() });
    }, []);

    const onChangeValue = (value) => {
        setElement(value);
    };


    const onSelectValue = (value) => {
        switch (value) {
            case types.listType.singlyLinkedList:
                setSelectedValue((preValue) => ({ ...preValue, listType: (types.listType.singlyLinkedList) }));
                break;

            case types.listType.doubleLinkedList:
                setSelectedValue((preValue) => ({ ...preValue, listType: (types.listType.doubleLinkedList) }));
                break;

            case types.action.addItem:
                setSelectedValue((preValue) => ({ ...preValue, action: (types.action.addItem) }));
                break;

            case types.action.removeItem:
                setSelectedValue((preValue) => ({ ...preValue, action: (types.action.removeItem) }));
                break;

            case types.section.beginning:
                setSelectedValue((preValue) => ({ ...preValue, section: (types.section.beginning) }));
                break;

            case types.section.after:
                setSelectedValue((preValue) => ({ ...preValue, section: (types.section.after) }));
                break;

            case types.section.before:
                setSelectedValue((preValue) => ({ ...preValue, section: (types.section.before) }));
                break;

            case types.section.end:
                setSelectedValue((preValue) => ({ ...preValue, section: (types.section.end) }));
                break;

            default:
                console.log(value, "No item found");
        }
    };

    const carryOutOparetions = (value) => {
        try {
            switch (SelectedValue.listType) {
                case types.listType.singlyLinkedList:
                    if (SelectedValue.action === types.action.addItem) {
                        switch (SelectedValue.section) {
                            case types.section.beginning:
                                Lists.SLinkedList.insertAt(value, 0);
                                break;
                            case types.section.after:
                                Lists.SLinkedList.insertAt(value, Lists.SLinkedList.indexOf(value) + 1);
                                break;
                            case types.section.before:
                                Lists.SLinkedList.insertAt(value, Lists.SLinkedList.indexOf(value) - 1);
                                break;
                            case types.section.end:
                                Lists.SLinkedList.add(value);
                                break;
                            default:
                                console.log("oparetion at sll failed");
                        }
                    } else if (SelectedValue.action === types.action.removeItem) {
                        switch (SelectedValue.section) {
                            case types.section.beginning:
                                Lists.SLinkedList.removeFrom(value, 0);
                                break;
                            case types.section.after:
                                Lists.SLinkedList.removeFrom(value, Lists.SLinkedList.indexOf(value) + 1);
                                break;
                            case types.section.before:
                                Lists.SLinkedList.removeFrom(value, Lists.SLinkedList.indexOf(value) - 1);
                                break;
                            case types.section.end:
                                Lists.SLinkedList.removeFrom(value, Lists.SLinkedList.size);
                                break;
                            default:
                                console.log("oparetion at sll failed");
                        }
                    } else {
                        console.log("error at submit sll");
                    }
                    break;

                case types.listType.doubleLinkedList:
                    if (SelectedValue.action === types.action.addItem) {
                        switch (SelectedValue.section) {
                            case types.section.beginning:
                                Lists.DLinkedList.add(value);
                                break;
                            case types.section.after:
                                Lists.DLinkedList.insertAt(value, Lists.DLinkedList.indexOf(value) + 1);
                                break;
                            case types.section.before:
                                Lists.DLinkedList.insertAt(value, Lists.DLinkedList.indexOf(value) - 1);
                                break;
                            case types.section.end:
                                Lists.DLinkedList.add(value);
                                break;
                            default:
                                console.log("oparetion at dll failed");
                        }
                    } else if (SelectedValue.action === types.action.removeItem) {
                        switch (SelectedValue.section) {
                            case types.section.beginning:
                                Lists.DLinkedList.removeFrom(value, 0);
                                break;
                            case types.section.after:
                                Lists.DLinkedList.removeFrom(value, Lists.DLinkedList.indexOf(value) + 1);
                                break;
                            case types.section.before:
                                Lists.DLinkedList.removeFrom(value, Lists.DLinkedList.indexOf(value) - 1);
                                break;
                            case types.section.end:
                                Lists.DLinkedList.removeElement(value);
                                break;
                            default:
                                console.log("oparetion at dll failed");
                        }
                    } else {
                        console.log("error at submit dll");
                    }
                    break;

                default:
                    console.log("No item working");
            }

            setListItems({ sllSize: Lists.SLinkedList.size, dllSize: Lists.DLinkedList.size, sllElements: Lists.SLinkedList.printList(), dllElements: Lists.DLinkedList.printList() });
        } catch (err) {
            console.log("ERROR", err);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        if (Element !== null || Element !== undefined || Element !== "") {
            carryOutOparetions(Element);
        }
    };

    return (<div className="grid md:grid-cols-3 gap-4 md:grid-rows-1 grid-cols-1 grid-rows-2">

        <form onSubmit={submit} className="flex flex-col md:col-span-1 place-self-start border border-gray-100 rounded shadow p-5">

            <input
                type="text"
                id="value"
                name="value"
                placeholder="Enter value"
                value={Element}
                onChange={(e) => onChangeValue(e.target.value)}
                className="align-text-top focus:outline-none block w-full  text-gray-700 placeholder-gray-500 border p-2 border-gray-200 rounded-md"
            />

            <label className="font-bold text-lg mt-3 text-primary capitalize">Select linkedlist type</label>
            <select id="diskSelectList" onChange={(e) => onSelectValue(e.target.value)} className="align-text-top mt-1 bg-white focus:outline-none block w-full  text-gray-700 placeholder-gray-500 border p-2 border-gray-200 rounded-md" name="end" id="end">
                <option value="SinglyLinkedList">SinglyLinkedList</option>
                <option value="DoubleLinkedList">DoubleLinkedList</option>
            </select>

            <label className="font-bold text-lg mt-2 text-primary capitalize">Select action</label>
            <select id="diskSelectList" onChange={(e) => onSelectValue(e.target.value)} className="align-text-top mt-1 bg-white focus:outline-none block w-full  text-gray-700 placeholder-gray-500 border p-2 border-gray-200 rounded-md" name="end" id="end">
                <option value="add">Add Item</option>
                <option value="remove">Remove Item</option>
            </select>

            <label className="font-bold text-lg mt-2 text-primary capitalize">Select linkedlist section</label>
            <select id="diskSelectList" onChange={(e) => onSelectValue(e.target.value)} className="align-text-top mt-1 bg-white focus:outline-none block w-full  text-gray-700 placeholder-gray-500 border p-2 border-gray-200 rounded-md" name="end" id="end">
                <option value="beginning">beginning</option>
                <option value="before">before</option>
                <option value="after">after</option>
                <option value="end">end</option>
            </select>

            <button className="rounded-xl md:text-lg text-sm w-full shadow-md mt-5 px-2 py-2 bg-primary text-white font-bold hover:bg-secondary focus:outline-none" type='submit'>Run</button>
        </form>


        <div className="flex flex-col border md:col-span-2 justify-self-stretch border-gray-100 rounded shadow p-5">
            <h1 className="font-bold text-2xl text-primary capitalize">Results</h1>
            <hr className="bg-primary" />

            <div className="w-full bg-primary mt-4 p-4 shadow rounded-lg">
                <h1 className="font-bold text-xl text-white">Singly LinkedList</h1>
                <hr className="bg-white" />

                <div className="mt-2">
                    <p className="text-white font-bold text-lg">{`Number of elements: ${ListItems.sllSize}`}</p>
                    <p className="text-white font-bold text-lg">{((ListItems.sllElements.length !== 0) ? `Elements : ${ListItems.sllElements?.map((value, index) => (`${value} `))}` : "No elements in the singly linkedList")}</p>
                </div>
            </div>

            <div className="w-full bg-primary mt-4 p-4 shadow rounded-lg">
                <h1 className="font-bold text-xl text-white">Doubly LinkedList</h1>
                <hr className="bg-white" />

                <div className="mt-2">
                    <p className="text-white font-bold text-lg">{`Number of elements: ${ListItems.dllSize}`}</p>
                    <p className="text-white font-bold text-lg">{((ListItems.dllElements.length !== 0) ? `Elements : ${ListItems.dllElements?.map((value, index) => (`${value} `))}` : "No elements in the doubly linkedList")}</p>
                </div>
            </div>
        </div>

    </div>);
}

export default LinkedList;