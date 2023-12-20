# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")

# Select database and collection
db = client["mydatabase"]
collection = db["mycollection"]

# Open CSV file
with open('file.csv', 'r') as file:
    reader = csv.reader(file)
    header = next(reader) # Get header row
    header.extend(["new_column1", "new_column2"]) # Add new columns to header
    for row in reader:
        # Match field and extract data
        field = row[0]
        data1, data2 = row[1], row[2]

        # Find document with matching field
        document = collection.find_one({"field": field})

        # Check if document exists
        if document is None:
            continue

        # Add new columns to document
        document["new_column1"] = data1
        document["new_column2"] = data2

        # Update document in MongoDB
        collection.update_one({"_id": document["_id"]}, {"$set": document})