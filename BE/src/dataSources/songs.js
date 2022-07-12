import { MongoDataSource } from 'apollo-datasource-mongodb';
import mongoose from 'mongoose';

export default class Songs extends MongoDataSource {
  async getSongs() {
    return await this.model.find();
  }

  async getSong(id) {
    const isValidID = mongoose.Types.ObjectId.isValid(id);
    if (isValidID) {
      const result = await this.findOneById(id);
      if(result) return result;
    }
      
    return null;
  }

  async createSong({ name, artist, genre, tag }) {
    return await this.model.create({ name, artist, genre, tag });
  }

  async updateSong({ id, name, artist, genre, tag }) {
    const isValidID = mongoose.Types.ObjectId.isValid(id);
    
    if(isValidID) {
      const result = await this.model.findOneAndUpdate({ _id : id }, {
        name: name,
        artist: artist,
        genre: genre,
        tag: tag
      });

      if(result) return result;
    }
    
    return false;
  }

  async deleteSong({ id }) {
    const isValidID = mongoose.Types.ObjectId.isValid(id);
    
    if(isValidID) {
      const result = await this.model.deleteOne({ _id : id });
      if(result.deletedCount === 1) return true;
    }

    return false;
  }

  async getFilteredSongs({ artists, genres, tags }) {
    let filterQuery = {};
    
    if(artists.length > 0)
      filterQuery.artist = { $in: artists };

    if(genres.length > 0)
      filterQuery.genre = { $in: genres };

    if(tags.length > 0)
      filterQuery.tag = { $in: tags };

    const result = this.model.find(filterQuery);

    if(result) return result;
  }
}