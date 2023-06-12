import { UserAndSkills } from '../../../types/userAndSkills';
import { GridContainer } from './GridContainer';
import { renderTypographyGridItem } from '../../../utils/renderSkills';
import React, { Fragment } from 'react';

interface Props {
    user: UserAndSkills
}

export const UserSkills = ({user}: Props) => {
    const userSkills = [
        { label: 'Ocena przejścia kursu:', value: `${user.courseCompletion}` },
        { label: 'Ocena aktywności i zaangażowania w kursie:', value: `${user.courseEngagement}` },
        { label: 'Ocena kodu w projekcie własnym:', value: `${user.projectDegree}` },
        { label: 'Ocena pracy w zespole w Scrum:', value: `${user.teamProjectDegree}` },
        { label: 'Preferowane miejsce pracy:', value: user.expectedTypeWork },
        { label: 'Docelowe miasto, gdzie chce pracować kandydat:', value: user.targetWorkCity },
        { label: 'Oczekiwany typ kontraktu:', value: user.expectedContractType },
        { label: 'Oczekiwane wynagrodzenie miesięczne netto:', value: user.expectedSalary },
        { label: 'Zgoda na odbycie bezpłatnych praktyk/stażu na początek:', value: user.canTakeApprenticeship },
        { label: 'Komercyjne doświadczenie w programowaniu:', value: user.monthsOfCommercialExp.toString() },
    ]
  return (
      <GridContainer>
          {userSkills.map((userSkill, index) =>
              <Fragment key={index}>{renderTypographyGridItem(userSkill.label, userSkill.value)}</Fragment>)}
      </GridContainer>
  )
}
