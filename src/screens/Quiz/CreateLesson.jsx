import React, { useEffect, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import MutiSelect from "../MultiSelect";
import { lessonCreate, loadLessonList } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import GLOBAL_CONSTANTS from "../../../GlobalConstants";


export default function CreateLesson() {
    const dispatch = useDispatch();

    const { lessonsList } = useSelector((state) => state?.data);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState(""); // Add state for title



    const handleEditorChange = (value, editor) => {
        console.log('Content was updated:', value);
        setContent(value)
    };


    useEffect(() => {
        dispatch(loadLessonList());
    }, [])

    const handleSubmit = () => {
        const payload = {
            title: title, // Replace with the actual title you want to send
            author_id: GLOBAL_CONSTANTS?.user_cred?.user_id, // You might want to dynamically set this
            data: content, // And this as well
            quiz_id: selectedLesson?.id // And this
        };

        dispatch(
            lessonCreate(
                payload,
                () => {
                    window.location.reload();
                    console.log('testing')
                }
            )
        );

        console.log("Submitting payload:", payload);
        // Add your submission logic here (e.g., API call, redirect, etc.)
    };

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-5">
                <div className="px-6 py-4">
                    {/* <h2 className="text-2xl font-bold text-gray-800 mb-3">Create a New Lesson</h2> */}
                    <div className="flex justify-between">
                        <div>
                            <div className="font-bold">Select Quiz to unlock</div>
                            <div className="py-2">
                                <MutiSelect
                                    options={(lessonsList || []).map((o) => ({
                                        label: o.title,
                                        id: o.id,
                                    }))}
                                    selectedItems={selectedLesson}
                                    onSelectionChange={setSelectedLesson}
                                    label="Select Lessons to Unlock"
                                />
                            </div>
                        </div>
                        <div className="w-full pl-10">
                            <div className="font-bold">Enter Lesson Title</div>
                            <div className="py-2">
                                <input
                                    id="lessonTitle"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter Lesson Title"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="py-2 w-full">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/6 font-bold">Enter Lesson Title</div>
                    <div className="md:w-5/6  w-full">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Lesson Title"
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        />
                    </div>
                </div>
            </div> */}

            {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lessonTitle">
                    Enter Lesson Title
                </label>
                <input
                    id="lessonTitle"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Lesson Title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div> */}



            <Editor
                apiKey='6uslfnqkm6qjxxn3v1cwgpc27eto4yqyjp5d7opih9vunxz7'
                initialValue="<p>Start Writing ... </p>"
                init={{
                    height: 500,
                    menubar: true,
                    branding: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                        'formatpainter textcolor emoticons pagebreak hr spellchecker',
                        'table imagetools media file'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help | ' +
                        'link image media | table | formatpainter | ' +
                        'emoticons charmap | fontsizeselect fontselect | ' +
                        'spellchecker | pagebreak hr fullscreen | code | ' +
                        'inserttable tableprops tabledelete | tableinsertrowbefore tableinsertrowafter ' +
                        'tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',


                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    file_picker_callback: function (cb, value, meta) {
                        var input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');

                        input.onchange = function () {
                            var file = this.files[0];
                            var reader = new FileReader();

                            reader.onload = function () {
                                var id = 'blobid' + (new Date()).getTime();
                                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                                var base64 = reader.result.split(',')[1];
                                var blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);

                                cb(blobInfo.blobUri(), { title: file.name });
                            };
                            reader.readAsDataURL(file);
                        };

                        input.click();
                    }
                }}
                onEditorChange={handleEditorChange}
            />
            <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            >
                Submit
            </button>

        </div>
    );
};

