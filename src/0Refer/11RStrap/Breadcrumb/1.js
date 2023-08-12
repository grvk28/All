import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function Bre(){
    return(
        <div>
            <div>active prop act opp. to link and check last</div>
            <>
            <Breadcrumb>
                <BreadcrumbItem active>
                Home
                </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem>
                <a href="#">
                    Home
                </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                Library
                </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem>
                <a href="#">
                    Home
                </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <a href="#">
                    Library
                </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                Data
                </BreadcrumbItem>
            </Breadcrumb>
            </>
        </div>
    )
}

export default Bre;