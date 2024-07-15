import {Data} from "../interfaces/Interface";

function createData(
  title: string,
  body: string,
  id: string,

): Data {
  return { title, body, id };
}

export const rows = [
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Eploy successfully', '2023-09-01'),
  createData('initializr', 'Deploy successfully', '2022-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2024-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),
  createData('initializr', 'Deploy successfully', '2021-09-01'),

];
