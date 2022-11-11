
from ninja import Router,Schema
from yunlan.models import Department
 
router = Router()
 
class DepartmentIn(Schema):
    title: str 

@router.post("/department")
def create_department(request, payload: DepartmentIn):
    department = Department.objects.create(**payload.dict())
    return {"id": department.id}
