import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option8 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     
     const formula = (num1,num2) => {
          const result = Number(num1)/Number(num2);
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }
     
     return (
          <OptionWrapper>
               <OptionHeading>Фондоотдача</OptionHeading>
               <h3>Рассчитать фондоотдачу⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Выручка'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Основные средствa'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Фондоёмкость: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Фондоотдача – это финансовый коэффициент, характеризующий эффективность использования основных средств организации. Фондоотдача показывает, сколько выручки приходится на единицу стоимости основных средств.
                         <br/><br/>
                         Следует отменить, что сам по себе показатель фондоотдачи не говорит об эффективности использования производственных фондов, а лишь показывает, как соотносится объем полученной от реализации продукции (т.е. выручки) со стоимостью имеющихся у организации средств труда. Сделать выводи именно об эффективности использования производственных фондов можно, сравнивая показатель фондоотдачи в динамике за ряд лет, либо сравнивая его с таким же показателем для других, аналогичных предприятий той же отрасли.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Показатель фондоотдачи рассчитывают по следующие формуле:
                         <br/><br/>
                         Фондоотдача = Выручка / Основные средства
                         <br/><br/>
                         Для более точного расчета показатель стоимости основных средств следует брать не на конец периода, а как среднее арифметическое за период, за который взята выручка (т.е. сумма стоимости основных средств на начало периода и конец периода, деленная на 2).
                         <br/><br/>
                         В некоторых источниках рекомендуют использовать первоначальную стоимость основных средств. Однако в бухгалтерской отчетности (Балансе) указывается остаточная стоимость основных средств, поэтому чаще в расчетах используют именно эту оценку.
                         <br/><br/>
                         По своей сути показатель фондоотдачи можно отнести к показателям оборачиваемости (наряду с оборачиваемостью запасов, дебиторской задолженности и прочих активов). Показатели оборачиваемости (коэффициент) всегда рассчитываются отношением выручки к тем или иным активам или обязательствам.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент фондоотдачи не имеет общепринятого нормального значения. Это объясняется тем, что показатель сильно зависит от отраслевых особенностей. Например, в фондоемких производствах доля основных средств в активах предприятия велика, поэтому коэффициент будет ниже. Если рассматривать показатель фондоотдачи в динамике, то рост коэффициента говорит о повышении интенсивности (эффективности) использования оборудования.
                         <br/><br/>
                         Соответственно, чтобы повысить фондоотдачу нужно либо увеличить выручки при использовании уже имеющегося оборудования (повысить эффективность его использования, производить продукцию с большей добавленной стоимостью, увеличить время использования оборудования – количество смен, использовать более современное и производительное оборудование), либо избавиться от ненужного оборудования, снизив таким образом его стоимость в знаменателе коэффициента. 
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option8;