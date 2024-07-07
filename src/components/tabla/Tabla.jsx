import { Table } from 'antd'

const TableComp = ({columns,pagination, data}) =>{
    
    return(
        <div className="box">
            <Table
                columns={columns}
                dataSource={data}
                size="small"
                rowKey={'id'}
                pagination={pagination}
            />
        </div>  
    )
}
export default TableComp


