import React, { FormEvent, useState } from 'react';

import Input from '../Input';
import Select from '../Select';

import {
  ScheduleWrapper,
  ScheduleContainer,
  ScheduleButtonContainer,
} from './styles';

interface ScheduleItemResponse {
  id: number;
  week_day: number;
  from: any;
  to: any;
}

interface ScheduleItemSectionProps {
  items: ScheduleItemResponse[];
  onUpdateItems(items: ScheduleItemResponse[]): void;
}

const ScheduleItemSection: React.FC<ScheduleItemSectionProps> = ({
  items,
  onUpdateItems,
}) => {
  const [scheduleItems, setScheduleItems] = useState(items);

  function handleAddNewScheduleItem() {
    const tempId = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    const scheduleItem = {
      id: tempId,
      week_day: 5,
      from: '',
      to: '',
    };

    setScheduleItems([...scheduleItems, scheduleItem]);
  }

  function setScheduleItemValue(
    position: Number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
    onUpdateItems(updatedScheduleItems);
  }

  function handleRemoveScheduleItem(e: FormEvent, id: number) {
    e.preventDefault();

    const updatedScheduleItems = scheduleItems.filter((item) => {
      return item.id !== id;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <fieldset>
      <legend>
        Horários disponíveis
        <button type="button" onClick={handleAddNewScheduleItem}>
          + Novo
        </button>
      </legend>

      {scheduleItems.map((scheduleItem, index) => {
        return (
          <ScheduleContainer key={index}>
            <ScheduleWrapper>
              <Select
                name="week_day"
                label="Dia da semana"
                value={scheduleItem.week_day}
                onChange={(e) =>
                  setScheduleItemValue(index, 'week_day', e.target.value)
                }
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' },
                ]}
                customClass="week-day-input"
              />

              <Input
                name="from"
                label="Das"
                type="time"
                value={scheduleItem.from}
                onChange={(e) =>
                  setScheduleItemValue(index, 'from', e.target.value)
                }
              />

              <Input
                name="to"
                label="Até"
                type="time"
                value={scheduleItem.to}
                onChange={(e) =>
                  setScheduleItemValue(index, 'to', e.target.value)
                }
              />
            </ScheduleWrapper>

            <ScheduleButtonContainer>
              <div />
              <button
                onClick={(e) => handleRemoveScheduleItem(e, scheduleItem.id)}
              >
                Excluir horário
              </button>
              <div />
            </ScheduleButtonContainer>
          </ScheduleContainer>
        );
      })}
    </fieldset>
  );
};

export default ScheduleItemSection;
