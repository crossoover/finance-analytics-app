import React, {useState} from 'react';
import {OptionWrapper,LabelForInput,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option4 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(0);
     const [number4, setNumber4] = useState(0);
     const [number5, setNumber5] = useState(0);
     
     const formula = (num1,num2,num3,num4,num5) => {
           const result = 2*Number(num1)+0.1*Number(num2)+0.08*Number(num3)+0.45*Number(num4)+Number(num5);
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }

     return (
          <OptionWrapper>
               <OptionHeading>Модель Сайфуллина-Кадыкова</OptionHeading>
               <h3>Рассчитать по модели Сайфуллина-Кадыкова⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         id="number1"
                         placeholder='К1'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <LabelForInput htmlFor="number1">Коэффициент обеспеченности собственными средствами⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2"
                         placeholder='К2'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2">Коэффициент текущей ликвидности⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number3"
                         placeholder='К3'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <LabelForInput htmlFor="number3">Коэффициент оборачиваемости активов⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number4"
                         placeholder='К4'
                         onChange={(e) => setNumber4(e.target.value)}
                    />
                    <LabelForInput htmlFor="number4">Рентабельность продаж⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number5"
                         placeholder='К5'
                         onChange={(e) => setNumber5(e.target.value)}
                    />
                    <LabelForInput htmlFor="number5">Рентабельность собственного капитала⬆️</LabelForInput>
               </FormWrapper>
               <Result>Модель Сайфуллина-Кадыкова: <ResultNumber>{formula(number1,number2,number3,number4,number5)}</ResultNumber></Result>
               
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент утраты платежеспособности – это финансовый коэффициент, показывающий вероятность ухудшения показателя текущий ликвидности предприятия в течение следующих 3 месяцев после отчетной даты.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент утраты платежеспособности утвержден в Методических положениях по оценке финансового состояния предприятий и установлению неудовлетворительной структуры баланса, утвержденных распоряжением Федерального управления по делам о несостоятельности (банкротстве) от 12.08.1994 г. N 31-р). Согласно документу, формула расчета коэффициента следующая:
                         <br/><br/>
                         Коэффициент утраты платежеспособности = (К1ф + 3/Т (К1ф - К1н)) / К1норм
                         <br/><br/>
                         где
                         <br/><br/>
                         К1ф - фактическое значение (в конце отчетного периода) коэффициента текущей ликвидности (К1);<br/>
                         К1н - коэффициент текущей ликвидности в начале отчетного периода;<br/>
                         К1норм - нормативное значение коэффициента текущей ликвидности; К1норм = 2;<br/>
                         3 - период утраты платежеспособности предприятия в месяцах;<br/>
                         Т - отчетный период в месяцах.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Если коэффициент утраты платежеспособности меньше 1, это свидетельствует о наличии реальной угрозы для предприятия утратить платежеспособность, это критическое значение. Т.е. при сложившейся с начала отчетного года динамики коэффициента текущей ликвидности через 3 месяца его значение может опуститься ниже 2, став неудовлетворительным.
                         <br/><br/>
                         Коэффициент утраты платежеспособности, как и схожий, по смыслу коэффициент восстановления платежеспособности, нельзя считать достаточно надежным показателем. Это связано с тем, что расчет основан на прогнозе изменения показателя текущей ликвидности всего по двум точкам – на начало и конец отчетного периода. Более надежный результат дает линейный тренд по данным за 4 и более периода.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option4;