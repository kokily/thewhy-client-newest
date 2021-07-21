import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  border-spacing: 2px;

  th,
  td {
    vertical-align: bottom;
    padding: 0.75em;
    border-top: 1px solid #dee2e6;
    border-color: rgba(0, 0, 0, 0.06);
  }

  tbody tr {
    transition: 0.12s;
    cursor: pointer;

    &:hover {
      background: #aee2d7;
    }
  }
`;

interface Props {
  notice: NoticeType[];
  onRead: (id: string) => void;
}

const Notice: React.FC<Props> = ({ notice, onRead }) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>No.</th>
          <th>제 목</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {notice && notice.length > 0 ? (
          notice.map((data) => (
            <tr key={data.id} onClick={() => onRead(data.id)}>
              <td style={{ textAlign: 'center' }}>{data.num}</td>
              <td>{data.title}</td>
              <td style={{ textAlign: 'center' }}>
                {new Date(data.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={3}>
              작성된 공지가 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </Container>
  );
};

export default Notice;
