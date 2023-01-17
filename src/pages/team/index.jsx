
import Header from "../../components/Header";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import  AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import  LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import  SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { mockDataTeam } from '../../data/mockData';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns =[
        {field: 'id', headerName: 'ID'},
        {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column-cell'},
        {field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', alight: 'left'},
        {field: 'phone', headerName: 'Phone Number', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1},
        {field: 'access', headerName: 'Acesses Level', flex: 1, 
                renderCell:({ row : { access }})=>{
                    return(
                        <Box width='40%'
                            m='0 auto'
                            p='5px'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            backgroundColor={
                                access === 'admin'
                                ? colors.greenAccent[600]
                                : colors.blueAccent[600]
                            }
                            borderRadius='4px'
                            >
                            {access === 'admin' && <AdminPanelSettingsOutlinedIcon/>}
                            {access === 'manager' && <SecurityOutlinedIcon/>}
                            {access === 'user' && <LockOpenOutlinedIcon/>}
                            <Typography color={colors.grey[100]} sx={{ ml: '5px'}}>
                                {access}
                            </Typography>
                        </Box>
                    )
                }},

    ]

    return(
        <Box m='20px'>
            <Box m='40px 0 0 0' height='75vh' sx={{ 
                '&.MuiDataGrid-root':{
                    border:'none'
                },
                '&.MuiDataGrid-cell':{
                    borderBottom: 'none'
                },
                '&.name-collumn--cell':{
                    color: colors.greenAccent[300]
                },
                '& .MuiDataGrid-columnHeaders':{
                    backgroundColor: colors.blueAccent[700],
                    borderBottom:'none'
                },
                '& .MuiDataGrid-visualScroller':{
                    backgroundColor: colors.primary[400]
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop: 'none',
                    backgroundColor: colors.blueAccent[700]
                }
                }}>
            
                <Header title={'TEAM'} subtitle={'Welcome to your Team pages'}></Header>
                
                    <DataGrid rows={mockDataTeam}
                        columns={columns}>
                    </DataGrid>
                
            </Box>
         </Box>
    );
}
export default Team;