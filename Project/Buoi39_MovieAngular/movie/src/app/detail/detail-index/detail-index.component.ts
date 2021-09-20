import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.scss']
})
export class DetailIndexComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private http: HttpClient, private movieSV: MovieService) { }

  movieDetail?: IMovie | null;

  fetchDetail = () => {
    const movieId = this.activateRoute.snapshot.params.id;
    this.http.get(
      "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim",
      {
        params: {
          MaPhim: movieId,
        },
        headers: {
          TokenCybersoft:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w',
        },
      }).subscribe((res: any) => {
        console.log("movie detail",res);
        this.movieSV.setMovieDetail(res.content);
      }, (err) => {
        console.log(err);
      })
  }

  ngOnInit(): void {
    
    this.fetchDetail();

    this.movieSV.movieDetail.subscribe((detail: IMovie | null) => {
      this.movieDetail = detail;
    })

    // 1. Import HttpClientModule
    // 2. Import service HttpClient
    // 3. Call API lấy chi tiết phim
    // 4. Lên movieService, tạo 1 dự liệu mới là movieDetail
    // 5. Sau khi call API thành công, lưu dữ liệu lên service
    // 6. Ở component Detail, lấy movieDetail xuống, show hình và tên
  }

}
