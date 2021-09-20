import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClient } from '@angular/common/http';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  // Dependency Injection
  constructor(private movieSV: MovieService, private http: HttpClient) { }
  movieList: IMovie[] = [];

  movieListSubscription: Subscription | undefined;

  handleCreateMovie(): void {
    this.movieSV.addMovie({
      tenPhim:"Avenger2",
      maPhim:12323,
      hinhAnh: "https://picsum.photos/200/300",
      moTa:"Good",
      biDanh: "qwer",
      trailer: "xyz",
      maNhom: "abc",
      ngayKhoiChieu: "15/12",
      danhGia: 12,
    })
  }

  fetchMovie = (): void => {
    this.http.get(
      `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim`,
      {
        params: {
          maNhom:"GP01",
        },
      }
      ).subscribe((res: any) => {
        console.log(res);
        this.movieSV.setMovieList(res.content);
      }, (err) => {
        console.log(err)
      })
  }

  // LifeCycle tương ứng với DidMount
  ngOnInit(): void {
    this.fetchMovie();

    // console.log(this.movieSV.movieList);
    // Lấy dữ liệu từ service và lưu vào biến hứng
    this.movieListSubscription = this.movieSV.movieList.subscribe((movies: IMovie[]) => {
      this.movieList = movies;
    });

    // Promise
    
    // Observable
    // const observable = new Observable((subcriber) => {
    //   setTimeout(() => {
    //     subcriber.next("data1");
    //     subcriber.error("error1");
    //   }, 2000)
    // })
    // observable.subscribe((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // })
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnDestroy(): void {
    // Optional Changing
    this.movieListSubscription?.unsubscribe();
  }
}
