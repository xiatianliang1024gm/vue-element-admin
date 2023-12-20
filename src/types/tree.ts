export interface Tree {
  label: string
  children?: Tree[]
}

export const DefaultTreeProps = {
  children: 'children',
  label: 'label'
}