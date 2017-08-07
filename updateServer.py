#author: Varun Rajiv Mantri
# Update Server - Makes Rest calls to a movie API requesting for movies information to store locally on MongoDB

from pymongo import MongoClient
import requests




def main():
    #connecting to the mongoDB server
    client=MongoClient(port=27017)

    #Creating/Acquiring database object

    db=client.movieDB
    
    #First clearing the olds content
    db.movies.drop()

    queryList = ['hindi','english','marathi','tamil','german','french']
    #verified dictionary holds the verified urls
    verifiedDict={}
    for item in queryList:
        good_url=[]
        data=requests.get("http://www.omdbapi.com/?s="+item+"&apikey=insert your key")
        data=data.json()
        for component in data["Search"]:
                good_url.append({'title': component['Title'], 'year': component["Year"], 'poster': component["Poster"]})
        verifiedDict[item] = good_url
    # inserting into database
    keys = verifiedDict.keys()
    for key in keys:
        db.movies.insert_one({'_id': key, 'data': verifiedDict[key]})
        print('Value inserted')
    print('update completed.....')
# Calling the main function
main()