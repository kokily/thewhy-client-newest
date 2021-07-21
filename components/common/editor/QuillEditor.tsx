import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { isProd, prodServer, devServer } from '../../../libs/constants';
import DragDrop from './DragDrop';

const Container = styled.div`
  top: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.125rem;
  min-height: 650px;
  margin-bottom: 5rem;
  .ql-toolbar {
    border: none;
    border-bottom: 1px solid #777;
  }
  .ql-container {
    flex: 1 1 0%;
    min-height: 0px;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 650px !important;
  }
  .ql-video {
    display: block;
    width: 100vw;
    height: 100vh;
    max-width: 650px;
    max-height: 480px;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;

export const modules = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'image', 'video', 'formula'],
      ['clean'],
    ],
    ImageDrop: true,
  },
};

interface Props {
  edit: boolean;
  QuillChange: (text: string) => void;
  body: string;
}

const QuillEditor: React.FC<Props> = ({ edit, QuillChange, body }) => {
  const Quill = typeof window === 'object' ? require('quill') : () => false;
  const quillEl = useRef(null);
  const quillIns = useRef(null);

  const onClickImage = () => {
    const upload = document.createElement('input');

    upload.setAttribute('type', 'file');
    upload.setAttribute('accept', 'image/*');
    upload.click();

    upload.onchange = async function () {
      if (!upload.files) return;

      const file = upload.files[0];
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(`${isProd ? prodServer : devServer}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      const range = quillIns.current.getSelection(true);

      quillIns.current.insertEmbed(
        range.index,
        'image',
        `https://d3cz7blqhirvsp.cloudfront.net/${data.key}`
      );
      quillIns.current.setSelection(range.index + 1);
    };
  };

  const onDragDropUpload = useCallback(async (file: File) => {
    try {
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(`${isProd ? prodServer : devServer}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      const range = quillIns.current.getSelection(true);

      quillIns.current.insertEmbed(
        range.index,
        'image',
        `https://d3cz7blqhirvsp.cloudfront.net/${data.key}`
      );
      quillIns.current.setSelection(range.index + 1);
    } catch (err) {
      alert(err);
    }
  }, []);

  useEffect(() => {
    if (quillEl.current) {
      quillIns.current = new Quill(quillEl.current, {
        theme: 'snow',
        placeholder: 'Please enter the contents',
        modules,
      });
    }

    const quill = quillIns.current;

    quill.on('text-change', () => {
      QuillChange(quill.root.innerHTML);
    });

    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', onClickImage);
  }, []);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;

    if (body) {
      mounted.current = true;

      quillIns.current.root.innerHTML = body;
    }
  }, [body]);

  return (
    <>
      <Container>
        <div ref={quillEl} style={{ border: 'none' }} />
      </Container>
      <DragDrop onUpload={onDragDropUpload} />
    </>
  );
};

export default QuillEditor;
