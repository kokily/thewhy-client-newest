import React from 'react';

interface Props {
  img: string;
  list: string[];
}

const List: React.FC<Props> = ({ img, list }) => {
  return (
    <div className="row">
      <div className="col">
        <img src={`/images/education/${img}.png`} alt="서비스 커뮤니케이션" />
      </div>

      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;