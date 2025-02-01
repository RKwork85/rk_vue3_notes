import os

# 定义 HTML 文件的基本内容
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>

</body>
</html>
"""
os.chdir(os.path.dirname(os.path.abspath(__file__)))
# 在当前目录下批量创建 HTML 文件
for i in range(1, 101):
    file_name = f"html{i}.html"  # 生成文件名
    with open(file_name, "w") as file:  # 打开文件并写入内容
        file.write(html_content)
    print(f"文件 {file_name} 创建成功")