from ninja import Router  
from yunlan.apis.employee import router as employee_router
from yunlan.apis.department import router as department_router

yunlan_router = Router()

yunlan_router.add_router("/", employee_router,tags=["Employee"]) 
yunlan_router.add_router("/", department_router, tags=["Department"])
