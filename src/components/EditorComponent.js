import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { Button } from 'reactstrap';
import { AutoComplete } from 'antd';

const TitleInput = styled.input`
    font-size:2rem;
    outline:none;
    padding-bottom:0.5rem;
    border:none;
    border-bottom: 1px solid;
    margin-bottom: 2rem;
    width:100%;
`;

const QuillWrapper = styled.div`
    .ql-editor{
        padding:0;
        min-height:320px;
        font-size:1.125rem;
        line-height:1.5;
    }
    .ql-editor.ql-blank::before{
        left:0px;
        opacity:0.5;
    }
`;

const EditorComponent = ({ title, body, onChangeField, onPublish, onCancel }) =>{
    const quillElement = useRef(null);
    const quillInstance = useRef(null);

    useEffect(()=>{
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder:'내용을 작성하세요...',
            modules:{
                toolbar:[
                    [{header:'1'}, {header:'2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list:'ordered'}, {list:'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image', 'file'],
                ],
            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source)=>{
        if(source==='user'){
            onChangeField({key:'body', value:quill.root.innerHTML});
        }
        });
    }, [onChangeField]);

    const mounted = useRef(null);
    useEffect(()=>{
        if(mounted.current) return;
        mounted.current=true;
        quillInstance.current.root.innerHTML=body;
    }, [body]);

    const onChangeTitle = e =>{
        onChangeField({key:'title', value:e.target.value});
    };

    const bodyStyle={
        margin:'20px auto 20px',
        width:'1200px',

    }

    const buttonStyle={
        margin:'10px',
    }

    return(
        <div style={bodyStyle}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <TitleInput placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title}/>
            <QuillWrapper>
                <div ref={quillElement}/>
            </QuillWrapper>
            <div>
                <Button style={buttonStyle} onClick={onPublish}>등록</Button>
                <Button style={buttonStyle} onClick={onCancel}>취소</Button>
            </div>
        </div>
    );
};

export default EditorComponent;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;