
from .models import appModel
from .serializers import appSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def allBlog(request):
    allBlogs = appModel.objects.all()
    serializer = appSerializer(allBlogs , many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addBlog(request):
    serializer = appSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteBlog(request , pk):
    try:
        blog = appModel.objects.get(id=pk)
    except appModel.DoesNotExist():
        return Response({"success": False , "message": "Blog Not found"} , status=404)

    blog.delete()
    return Response({"message": "Blog Deleted Successfully"} , status=status.HTTP_204_NO_CONTENT)        