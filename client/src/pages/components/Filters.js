import Select from 'react-select';

const Filters = ({getFilterArgYear, getFilterArgClub}) => {

  // YEAR
  const filterOptsYear = [
    {value: 2019, label: 2019},
    {value: 2020, label: 2020},
    {value: 2021, label: 2021},
  ];

  const handleonChangeYear = (selectedYear) => {getFilterArgYear(selectedYear.value);}

  // CLUB
  const filterOptsClub = [
    {value: "Liverpool", label: "Liverpool"},
    {value: "Everton", label: "Everton"},
    {value: "Chelsea", label: "Chelsea"},
  ];

  const handleonChangeClub = (selectedClub) => {getFilterArgClub(selectedClub.value);}

  return (
    <div>
      <Select options={filterOptsYear} onChange={handleonChangeYear}/>
      <Select options={filterOptsClub} onChange={handleonChangeClub}/>
    </div>
  )
}

export default Filters;



