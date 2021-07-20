import React from 'react';

interface Props {
  img: string;
  list: string[];
  end?: boolean;
}

const List: React.FC<Props> = ({ img, list, end }) => {
  return (
    <div className="row">
      <div className="col">
        <img src={`/images/education/${img}.png`} alt="서비스 커뮤니케이션" />
      </div>

      <ul className={end && 'end'}>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;