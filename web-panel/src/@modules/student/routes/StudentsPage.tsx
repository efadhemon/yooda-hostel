import { Paths } from "@shared/enums";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import StudentList from "../components/StudentList";

const StudentsPage = () => {
    const navigate = useNavigate();
    return (
        <PageHeader
            title="Student List"
            extra={[
                <Button
                    key="1"
                    onClick={() => navigate(Paths.StudentCreate)}
                    type="primary"
                >
                    Add Student
                </Button>,
            ]}
        >
            <StudentList />
        </PageHeader>
    );
};

export default StudentsPage;
