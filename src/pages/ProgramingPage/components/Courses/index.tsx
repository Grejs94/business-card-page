import React from "react";

import { data } from "./dataHelper";
import * as Styled from "./styles";

type Props = {};

const Courses: React.FC<Props> = () => {
  return (
    <div>
      <Styled.SectionTitle>Kursy</Styled.SectionTitle>
      {data.map((item) => (
        <div key={item.id}>
          <Styled.CoursesInfo>Autor: {item.author}</Styled.CoursesInfo>
          <Styled.CoursesInfo>
            Czas trwania: {item.durationStart}-{item.durationEnd}
          </Styled.CoursesInfo>
          <Styled.CoursesInfo>Platforma: {item.platform}</Styled.CoursesInfo>
          <Styled.CoursesInfo>Kursy: </Styled.CoursesInfo>
          <Styled.CoursesContainer>
            {item.courses.map((course: string) => (
              <Styled.Courses key={course}>- {course}</Styled.Courses>
            ))}
          </Styled.CoursesContainer>
        </div>
      ))}
    </div>
  );
};

export default Courses;
