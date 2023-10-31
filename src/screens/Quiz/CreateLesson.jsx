import React, { useEffect, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';


export default function CreateLesson() {
    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    };

    return (
        < div className="p-5">
            <Editor
                apiKey='6uslfnqkm6qjxxn3v1cwgpc27eto4yqyjp5d7opih9vunxz7'
                initialValue="<p>Start Writing ... </p>"
                init={{
                    height: 500,
                    menubar: true, // Enables the menu
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
        </div>
    );
};

